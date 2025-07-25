import { EdgeProps, getSmoothStepPath } from 'reactflow';

const LoopReturnEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  markerEnd,
}: EdgeProps) => {
  // Path calculation logic is kept as it's essential for the visual shape.
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY: sourceY - 15, // Adjusted for visual appearance
    targetX,
    targetY,
    borderRadius: 10,
  });

  return (
    <path
      id={id}
      className="react-flow__edge-path stroke-primary stroke-2 fill-none"
      d={edgePath}
      markerEnd={markerEnd}
    />
  );
};

export { LoopReturnEdge };
