import { ApNodeType } from './types';

const ARC_LENGTH = 15;
const ARC_LEFT = `a${ARC_LENGTH},${ARC_LENGTH} 0 0,0 -${ARC_LENGTH},${ARC_LENGTH}`;
const ARC_RIGHT = `a${ARC_LENGTH},${ARC_LENGTH} 0 0,1 ${ARC_LENGTH},${ARC_LENGTH}`;
const ARC_LEFT_DOWN = `a${ARC_LENGTH},${ARC_LENGTH} 0 0,1 -${ARC_LENGTH},${ARC_LENGTH}`;
const ARC_RIGHT_DOWN = `a${ARC_LENGTH},${ARC_LENGTH} 0 0,0 ${ARC_LENGTH},${ARC_LENGTH}`;
const ARC_RIGHT_UP = `a${ARC_LENGTH},${ARC_LENGTH} 0 0,1 -${ARC_LENGTH},-${ARC_LENGTH}`;
const ARC_LEFT_UP = `a-${ARC_LENGTH},-${ARC_LENGTH} 0 0,0 ${ARC_LENGTH},-${ARC_LENGTH}`;
const LABEL_HEIGHT = 30;
const LABEL_VERTICAL_PADDING = 12;
const LINE_WIDTH = 2.5;
const VERTICAL_SPACE_BETWEEN_STEP_AND_LINE = 7;
const VERTICAL_SPACE_BETWEEN_STEPS = 85;

// Mock step node dimensions
const MOCK_STEP_NODE_HEIGHT = 70;
const MOCK_STEP_NODE_WIDTH = 260;

const AP_NODE_SIZE: Record<
  Exclude<ApNodeType, ApNodeType.GRAPH_START_WIDGET>,
  { height: number; width: number }
> = {
  [ApNodeType.BIG_ADD_BUTTON]: {
    height: 50,
    width: 50,
  },
  [ApNodeType.ADD_BUTTON]: {
    height: 18,
    width: 18,
  },
  [ApNodeType.STEP]: {
    height: 70,
    width: 260,
  },
  [ApNodeType.LOOP_RETURN_NODE]: {
    height: 70,
    width: 260,
  },
  [ApNodeType.GRAPH_END_WIDGET]: {
    height: 0,
    width: 0,
  },
};

export const flowUtilConsts = {
    AP_NODE_SIZE,
    ARC_LEFT,
    ARC_LEFT_DOWN,
    ARC_LEFT_UP,
    ARC_LENGTH,
    ARC_RIGHT,
    ARC_RIGHT_DOWN,
    ARC_RIGHT_UP,
    LABEL_HEIGHT,
    LABEL_VERTICAL_PADDING,
    LINE_WIDTH,
    MOCK_STEP_NODE_HEIGHT,
    MOCK_STEP_NODE_WIDTH,
    VERTICAL_SPACE_BETWEEN_STEP_AND_LINE,
    VERTICAL_SPACE_BETWEEN_STEPS,
}
