import { Component } from '@angular/core';

@Component({
  selector: 'app-add-newsletter',
  templateUrl: './add-newsletter.component.html',
  styleUrls: ['./add-newsletter.component.css']
})
export class AddNewsletterComponent {
  titre = '';
  commentaire = '';
  image: File | null = null;

  onSubmit() {
    console.log('Données soumises :', { titre: this.titre, commentaire: this.commentaire, image: this.image });
  }

  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.image = fileList[0];
    }
  }
}
