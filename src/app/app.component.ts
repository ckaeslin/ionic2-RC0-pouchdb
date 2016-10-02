import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import PouchDB from 'pouchdb-browser';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = TabsPage;
  public db;

  constructor(platform: Platform) {
    this.db = new PouchDB('test');
    console.log(this.db);

    var todo = {
      _id: new Date().toISOString(),
      title: 'text',
      completed: false
    };
    this.db.put(todo, function callback(err, result) {
      if (!err) {
        console.log('Successfully posted a todo!');
      } else {
        console.log(err);
      }
    });

    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
