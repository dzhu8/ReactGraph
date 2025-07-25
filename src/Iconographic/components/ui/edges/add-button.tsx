import { Plus } from 'lucide-react';
import React from 'react';

import { cn } from '../../../utils';

import { flowUtilConsts } from '../utils/consts';
//import { ApButtonData } from '../utils/types';

const ApAddButton = React.memo(() => {
  return (
    <>
      <div
        style={{
          width: flowUtilConsts.AP_NODE_SIZE.ADD_BUTTON.width + 'px',
          height: flowUtilConsts.AP_NODE_SIZE.ADD_BUTTON.height + 'px',
        }}
      >
        <div
          style={{
            width: flowUtilConsts.AP_NODE_SIZE.ADD_BUTTON.width + 'px',
            height: flowUtilConsts.AP_NODE_SIZE.ADD_BUTTON.height + 'px',
          }}
          className={cn('rounded-xs cursor-pointer transition-all z-50')}
        >
          <div
            style={{
              width: flowUtilConsts.AP_NODE_SIZE.ADD_BUTTON.width + 'px',
              height: flowUtilConsts.AP_NODE_SIZE.ADD_BUTTON.height + 'px',
            }}
            className={cn(
              'bg-light-blue  relative group overflow-visible rounded-xs cursor-pointer  flex items-center justify-center  transition-all duration-300 ease-in-out',
            )}
          >
            {/* Conditional rendering for the plus icon is removed. It's always visible now. */}
            <Plus className="w-3 h-3 stroke-[3px] text-white" />
          </div>
        </div>
      </div>
    </>
  );
});

ApAddButton.displayName = 'ApAddButton';
export { ApAddButton };
