import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /***  App 1 ***/
  loadedFeature = 'recipe'

  onNavigate(feature: string) {
    this.loadedFeature = feature
  }
  /***  App 2 ***/
  // serverElements = [{type: 'server', name: 'Server 1', content: 'Đang hoạt động bình thường'}]

  // onServerAdded(serverData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   })
  // }

  // onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent
  //   })
  // }
}
