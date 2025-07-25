import { EdgeProps, getSmoothStepPath } from 'reactflow';

const LoopStartEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
}: EdgeProps) => {
  // Path calculation is kept for visual representation.
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    borderRadius: 10,
  });

  return (
    <path
      id={id}
      className="react-flow__edge-path stroke-primary stroke-2 fill-none"
      d={edgePath}
    />
  );
};

export { LoopStartEdge };