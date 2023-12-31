import { DisplayMode, Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
// import { PropertyFieldCollectionData } from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';
// import {  CustomCollectionFieldType } from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';

import styles from './TabsWebPart.module.scss';
import * as strings from 'TabsWebPartStrings';

import * as $ from 'jquery';

export interface ITabsWebPartProps {
  description: string;
  sectionClass: string;
  webpartClass: string;
  tabData: any[];
}

export default class TabsWebPart extends BaseClientSideWebPart<ITabsWebPartProps> {
  
  public render(): void {
    require('./AddTabs.js');
    require('./AddTabs.css');

    if (this.displayMode == DisplayMode.Read) {
      var tabWebPartID: any = "";
      // var zoneDIV: any = "";

      tabWebPartID = $(this.domElement).closest("div." + this.properties.webpartClass).attr("id");
      // zoneDIV = $(this.domElement).closest("div." + this.properties.sectionClass);

      var tabsDiv = tabWebPartID + "tabs";
      var contentsDiv = tabWebPartID + "Contents";

      this.domElement.innerHTML = "<div data-addui='tabs'><div role='tabs' id='" + tabsDiv + "'></div><div role='contents' id='" + contentsDiv + "'></div></div>";

      var thisTabData = this.properties.tabData;
      for (var x in thisTabData) {
        $("#" + tabsDiv).append("<div>" + thisTabData[x].TabLabel + "</div>");
        $("#" + contentsDiv).append($("#" + thisTabData[x].WebPartID));
      }

      //@ts-ignore
      RenderTabs();
    } else {
      this.domElement.innerHTML = `
        <div class="${styles.modernHillbillyTabs}">
          <div class="${styles.container}">
            <div class="${styles.row}">
              <div class="${styles.column}">
                <span class="${styles.title}">Manage Tabs</span>
              </div>
            </div>
          </div>
        </div>`;
    }
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  private getZones(): Array<[string, string]> {
    const zones: Array<[string, string]> = [];

    var tabWebPartID = $(this.domElement).closest("div." + this.properties.webpartClass).attr("id");
    var zoneDIV = $(this.domElement).closest("div." + this.properties.sectionClass);
    var count = 1;
    $(zoneDIV).find("." + this.properties.webpartClass).each(function () {
      var thisWPID = $(this).attr("id");
      if (thisWPID != tabWebPartID) {
        const zoneId: any = $(this).attr("id");
        let zoneName: string = "Web Part " + count;
        count++;
        zones.push([zoneId, zoneName]);
      }
    });

    return zones;
  }
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    this.getZones()
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('sectionClass', {
                  label: strings.SectionClass,
                  description: "Class identifier for Page Section, don't touch this if you don't know what it means."
                }),
                PropertyPaneTextField('webpartClass', {
                  label: strings.WebPartClass,
                  description: "Class identifier for Web Part, don't touch this if you don't know what it means."
                }),
                // PropertyFieldCollectionData("tabData", {
                //   key: "tabData",
                //   label: strings.TabLabels,
                //   panelHeader: "Specify Labels for Tabs",
                //   manageBtnLabel: "Manage Tab Labels",
                //   value: this.properties.tabData,
                //   fields: [
                //     // // {
                //     // //   id: "Title",
                //     // //   title: "Firstname",
                //     // //   type: CustomCollectionFieldType.string,
                //     // //   required: false
                //     // // },
                //     // {
                //     //   id: "WebPartID",
                //     //   title: "Web Part",
                //     //   type: CustomCollectionFieldType.dropdown,
                //     //   required: true,
                //     //   options: this.getZones().map((zone: [string, string]) => {
                //     //     return {
                //     //       key: zone["0"],
                //     //       text: zone["1"],
                //     //     };
                //     //   })
                //     // },
                //     // {
                //     //   id: "TabLabel",
                //     //   title: "Tab Label",
                //     //   type: CustomCollectionFieldType.string
                //     // }
                //   ],
                // })
              ]
            }
          ]
        }
      ]
    };
  }
}
