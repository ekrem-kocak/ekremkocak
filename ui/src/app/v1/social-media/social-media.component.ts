import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import Typewriter from 't-writer.js';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent {
  @ViewChild('twinfo') infoElement: any;
  // @ViewChild('twabout') aboutMeElement: any;

  socialMedia: SocialMedia[] | null = null;
  infoMessage: string | null = null;
  aboutMeMessage: string | null = null;

  constructor(private http: HttpClient) {
    this.getData().subscribe({
      next: (res) => {
        this.socialMedia = res.socailMediaData;
        this.infoMessage = res.infoMessage;
        this.aboutMeMessage = res.aboutMessage;
        this.startTyping();
      },
    });
  }

  startTyping() {
    const infoTarget = this.infoElement.nativeElement;

    const writer = new Typewriter(infoTarget, {
      loop: true,
      typeColor: '#fff',
      cursorColor: '#fff',
    });

    writer.type(this.infoMessage).rest(5000).start();
  }

  getData(): Observable<Data> {
    return this.http.get<Data>('assets/data/social-media-data.json');
  }
}

class SocialMedia {
  url: string | null = null;
  class: string | null = null;
  icon: string | null = null;
  tooltipContent: string | null = null;
}

class Data {
  socailMediaData: SocialMedia[] | null = null;
  infoMessage: string | null = null;
  aboutMessage: string | null = null;
}
