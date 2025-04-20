'use client'
import { useState } from 'react';
import CodeSyntaxHighlighter from './CodeSytanxHandler'

type TabItemsType = {
  id: string;
  label: string;
  isActive: boolean;
};

function CodeEditor() {
  const [activeStrip, setActiveStrip] = useState<number>(131);
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

  const tabClickHandler = (event: React.MouseEvent<HTMLLIElement>, item: TabItemsType) => {
    const tabItem = event.currentTarget;
    const parent = tabItem.parentElement;
    setActiveTab(item);
    setTabs(tabs.map((tab: TabItemsType) => ({...tab, isActive: tab.id === item.id})));

    if (parent) {
      const tabItemRect = tabItem.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();

      const activeStripWidth = tabItemRect.width;
      const activeStripInsetX = tabItemRect.left - parentRect.left;
      setActiveStrip(activeStripWidth);
      setActiveStripInsetX(activeStripInsetX);
    }
  };
  
  return (
    <div className='code-editor-wrapper'>
      <div className="code-editor-header">
        <ul className="tabs">
          {
            tabs.map((item: TabItemsType, index: number): React.ReactNode => {
              return <li key={index} className={item.isActive ? "tab-item active" : "tab-item"} tabIndex={0} role="tabItem" onClick={(e) => tabClickHandler(e, item)}>
                {item.label}
              </li>
            })
          }
          {/* <li className="tab-item" tabIndex={0} role="tabItem" onClick={(e) => tabClickHandler(e)}>Book Flight</li>
          <li className="tab-item" tabIndex={0} role="tabItem" onClick={(e) => tabClickHandler(e)}>Post Booking Requests</li> */}
          <span className="active-strip" style={{
            '--strip-width': `${activeStrip}px`,
            '--strip-inset-x': `${activeStripInsetX}px`
          } as React.CSSProperties}></span>
        </ul>
      </div>
      <div className="code-editor-body">
        {tabs.map((tab: TabItemsType, index: number) => (
          activeTab.id === tab.id && (<CodeSyntaxHighlighter key={index} code={codeSample} />)
        ))}
      </div>
    </div>
  )
}

export default CodeEditor