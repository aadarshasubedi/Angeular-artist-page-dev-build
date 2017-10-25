import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cms-page-editor-artist',
  templateUrl: './cms-page-editor-artist.component.html',
  styleUrls: ['./cms-page-editor-artist.component.css']
})

@Input()  
export class CmsPageEditorArtistComponent implements OnInit {
clubStyleProperties;
possibleProperties;
elementBox: object[];
HideTheSubmenu = true;
  constructor() { }

// handel selected property
setProperty(index){
  console.log("Selected property is: ");
  console.log(index);
}

OpenSubMenue(){
  if(this.HideTheSubmenu === false){
    this.HideTheSubmenu = true;
  } else if( this.HideTheSubmenu === true) {
    this.HideTheSubmenu = false;
  }
  
}
  ngOnInit() {
// set the properties
this.possibleProperties = [
  {
    "propertyName":"Fonts",
    "propertyID":"1",
    "PresetPPropertyTypes":["Helvetica","Ariel","WR1Font"],
  },
  {
    "propertyName":"Colors",
    "propertyID":"2",
    "PresetPPropertyTypes":["white","black","WR1Color"],
  },
  {
    "propertyName":"font-size",
    "propertyID":"3",
    "PresetPPropertyTypes":["14px","16px","2vw"],
  },
  {
    "propertyName":"font-weight",
    "propertyID":"4",
    "PresetPPropertyTypes":["lighter","bolder","WR1Weight"],
  },
  {
    "propertyName":"stylize",
    "propertyID":"5",
    "PresetPPropertyTypes":["underline","other","WR1Font"],
  },
]
    this.clubStyleProperties =[
      {
        "propertyName":"fonts",
        "propertyID":"1",
        "serverFriendlyName":"fonts",
        "PresetPPropertyTypes":["Helvetica","Ariel","WR1Font"],
      },
      {
        "propertyName":"color",
        "propertyID":"2",
        "serverFriendlyName":"color",
        "PresetPPropertyTypes":["white","black","WR1Color"],
      },
      {
        "propertyName":"font size",
        "propertyID":"3",
        "serverFriendlyName":"fontSize",
        "PresetPPropertyTypes":["14px","16px","2vw"],
      },
      {
        "propertyName":"font weight",
        "propertyID":"4",
        "serverFriendlyName":"fontWeight",
        "PresetPPropertyTypes":["lighter","bolder","WR1Weight"],
      },
      {
        "propertyName":"decorator",
        "propertyID":"5",
        "serverFriendlyName":"decorator",
        "PresetPPropertyTypes":["underline","other","WR1Font"],
      },
    ]

    this.elementBox = [
      {
        "elementName":"Call to action button",
        "propertyID":"121",
        "serverFriendlyName":"CallToActionButton",
        "FAitemIcon":"fa fa-free-code-camp"
       
      },
      {
        "elementName":"Banner",
        "propertyID":"122",
        "serverFriendlyName":"bannerBox",
        "FAitemIcon":"fa-plus-square"
      },
     
    ]
        
  }

}
