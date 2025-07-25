import { useState } from "react";
import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { mockNodes, MockStepNode, MockNodeData } from "./mock-nodes";

export default function StyleShowcase() {
     const [selectedNode, setSelectedNode] = useState<string | null>(null);

     // Create positioned nodes for the canvas
     const positionedNodes = mockNodes.map((node, index) => ({
          id: node.id,
          type: "custom",
          position: {
               x: (index % 3) * 300 + 50, // 3 columns
               y: Math.floor(index / 3) * 120 + 50, // Rows spaced 120px apart
          },
          data: node,
     }));

     const nodeTypes = {
          custom: ({ data, selected }: { data: MockNodeData; selected: boolean }) => (
               <MockStepNode data={data} selected={selected} onClick={() => setSelectedNode(data.id)} />
          ),
     };

     return (
          <div className="w-full h-screen bg-background font-inter">
               <div className="p-4">
                    <h1 className="text-2xl font-bold mb-4">Iconographic Style</h1>
               </div>

               {/* Flow Canvas with Background Grid - Add explicit width and height */}
               <div
                    className="border border-border-color rounded-lg overflow-hidden shadow-step-container"
                    style={{
                         width: "100%",
                         height: "calc(100vh - 120px)",
                    }}
               >
                    <ReactFlow
                         nodes={positionedNodes}
                         edges={[]} // No edges for this showcase
                         nodeTypes={nodeTypes}
                         draggable={false}
                         nodesConnectable={false}
                         nodesDraggable={false}
                         elementsSelectable={true}
                         fitView
                         minZoom={0.5}
                         maxZoom={1.5}
                         defaultViewport={{ x: 0, y: 0, zoom: 1 }}
                    >
                    </ReactFlow>
               </div>

               {/* Info Panel */}
               <div className="p-4 border-t border-border-color">
                    {selectedNode && (
                         <div className="mt-2 text-sm">
                              <strong>Selected:</strong> {mockNodes.find((n) => n.id === selectedNode)?.name}
                         </div>
                    )}
               </div>
          </div>
     );
}
