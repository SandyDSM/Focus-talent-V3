import { Divider, SwitchField } from '@aws-amplify/ui-react';
import React from 'react'

function RowTalentElement() {
    return (
        <div className="flex flex-col">
          <div className="flex flex-row self-stretch py-2 px-9 items-center relative gap-6">
              <SwitchField
                shrink="0"
                size="default"
                defaultChecked= "Checked"
              />
            <div className="flex flex-col">
              <p className="text-sm">
              Calibración 2022
              </p>
            </div>
          </div>
    
          <Divider
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="small"
            orientation="horizontal"
          />
        </div>
      );
}

export default RowTalentElement