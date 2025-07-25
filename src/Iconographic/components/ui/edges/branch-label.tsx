import { cn } from '../../../utils';
import { flowUtilConsts } from '../utils/consts';

type SimpleBranchLabelProps = {
  label: string;
  targetNodeName: string;
  sourceNodeName: string;
};

const BranchLabel = (props: SimpleBranchLabelProps) => {
  return (
    <div className="h-full flex items-center justify-center">
      <div
        className="bg-background"
        style={{
          paddingTop: flowUtilConsts.LABEL_VERTICAL_PADDING / 2 + 'px',
          paddingBottom: flowUtilConsts.LABEL_VERTICAL_PADDING / 2 + 'px',
        }}
      >
        <div
          className={cn(
            'flex items-center justify-center gap-0.5 select-none transition-all rounded-full text-sm border border-solid bg-primary-100/30 dark:bg-primary-100/15 border-primary/50 px-2 text-primary/80 dark:text-primary/90'
          )}
          style={{
            height: flowUtilConsts.LABEL_HEIGHT + 'px',
            maxWidth: flowUtilConsts.AP_NODE_SIZE.STEP.width - 10 + 'px',
          }}
        >
          <div className="truncate">{props.label}</div>
        </div>
      </div>
    </div>
  );
};

export { BranchLabel };