'use client'
import { useState } from 'react';
import CodeSyntaxHighlighter from './CodeSytanxHandler'

type TabItemsType = {
  id: string;
  label: string;
  isActive: boolean;
};

function CodeEditor() {
  const [activeStrip, setActiveStrip] = useState<number>(134.5);
  const [activeStripInsetX, setActiveStripInsetX] = useState<number>(0);
  const [tabs, setTabs] = useState<TabItemsType[]>([
    { id: 'tab-1', label: 'Flight Search', isActive: true},
    { id: 'tab-2', label: 'Book Flight', isActive: false},
    { id: 'tab-3', label: 'Post Booking Requests', isActive: false},
  ]);
  const [activeTab, setActiveTab] = useState<TabItemsType>(tabs[0]);
  const codeSample = `{
    "OriginDestinationInformations": [
      {
        "DepartureDateTime": "2020-02-03T00:00:00",
        "OriginLocationCode": "BLR",
        "DestinationLocationCode": "DXB"
  },
    {
        "DepartureDateTime": "2020-02-13T00:00:00",
        "OriginLocationCode": "DXB",
        "DestinationLocationCode": "BLR"
      }
    ],
    "TravelPreferences": {
      "MaxStopsQuantity": "Direct",
      "VendorPreferenceCodes": [
        "EK"
        ],
      "CabinPreference": "Y",
      "Preferences": {
        "CabinClassPreference": {
          "CabinType": "Y",
          "PreferenceLevel": "Restricted"
        }
      },
      "AirTripType": "Return"
    },
    "PricingSourceType": "Public",
    "IsRefundable": true,
    "PassengerTypeQuantities": [
      {
        "Code": "ADT",
        "Quantity": 1
      }
    ],
    "RequestOptions": "Fifty",
    "NearByAirports": true,
    "Target": "Test",
    "ConversationId": "string"
  }
  `;

  const tabClickHandler = (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>, item: TabItemsType) => {
    const tabItem = event.currentTarget as HTMLLIElement;
    const parent = tabItem.parentElement as HTMLLIElement;
    setActiveTab(item);
    setTabs(tabs.map((tab: TabItemsType) => ({...tab, isActive: tab.id === item.id})));

    if (parent) {
      const tabItemRect = tabItem.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      
      const activeStripWidth = Math.round(tabItemRect.width);
      const activeStripInsetX = Math.round(tabItemRect.left - parentRect.left);
      setActiveStrip(activeStripWidth);
      setActiveStripInsetX(activeStripInsetX);
    }
  };
  const onKeydownHandler = (event: React.KeyboardEvent<HTMLLIElement>, item: TabItemsType) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      tabClickHandler(event, item);
    }
  }
  
  return (
    <div className='code-editor-wrapper'>
      <div className="code-editor-header">
        <ul className="tabs" role="tablist">
          {
            tabs.map((item: TabItemsType, index: number): React.ReactNode => {
              const isSelected = item.isActive;
              return <li
                key={index}
                id={`tab-${index}`}
                className={isSelected ? "tab-item active" : "tab-item"}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`tabpanel-${index}`}
                tabIndex={0}
                onClick={(e) => tabClickHandler(e, item)}
                onKeyDown={(e) => onKeydownHandler(e, item)}>
                {item.label}
              </li>
            })
          }
          <span className="active-strip" style={{
            '--strip-width': `${activeStrip}px`,
            '--strip-inset-x': `${activeStripInsetX}px`
          } as React.CSSProperties}></span>
        </ul>
      </div>
      <div className="code-editor-body" role="tab-body">
        {tabs.map((tab: TabItemsType, index: number) => (
          activeTab.id === tab.id && (<CodeSyntaxHighlighter key={index} code={codeSample} />)
        ))}
      </div>
    </div>
  )
}

export default CodeEditor