import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  entries;

  constructor() { }

  ngOnInit(): void {
    getGitQuery().then((query) => this.entries = query);
    console.log(this.entries);
  }
}

async function getGitQuery(){
  const response = await fetch('https://us-central1-luuk180-dev.cloudfunctions.net/GitHubAPI', {
    method: 'GET',
  });
  const json = await response.json();
  const data = json.data.user.repositories.nodes;

  return data;
}
