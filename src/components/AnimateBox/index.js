import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { useWindowDimensions } from "../../utils/helpers";

const BOX_COUNT = 10;

const boxIds = new Array(BOX_COUNT).fill().map((_, idx) => idx);
const boxIdsCoordinates = boxIds.reduce(
  (acc, id) => ({
    ...acc,
    [id]: [
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI,
    ],
  }),
  0
);

const useStore = create(
  subscribeWithSelector((set) => ({
    boxes: boxIds,
    coordinates: boxIdsCoordinates,
    mutate: () => {
      set((state) => {
        const coordinates = {};
        for (let i = 0; i < state.boxes.length; i++) {
          const id = state.boxes[i];
          const [x, y, z] = state.coordinates[id];
          coordinates[id] = [x + 0.00008, y + 0.00008, z + 0.0008];
        }

        return { ...state, coordinates };
      });
    },
  }))
);

const AnimateBox = ({ id }) => {
  const { downMediumScreen } = useWindowDimensions();

  const mesh = useRef();
  const coordinates = useRef([0, 0, 0]);

  useEffect(() =>
    useStore.subscribe(
      (state) => state.coordinates[id],
      (xyz) => (coordinates.current = xyz)
    )
  );
  useFrame(
    () => mesh.current && mesh.current.rotation.set(...coordinates.current)
  );

  return (
    <mesh ref={mesh}>
      <boxBufferGeometry
        args={downMediumScreen ? [1, 3, 1] : [1, 3, 4]}
        attach="geometry"
      />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
};

export { useStore, AnimateBox };
