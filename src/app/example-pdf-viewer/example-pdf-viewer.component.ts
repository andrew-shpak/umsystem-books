import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-example-pdf-viewer',
  templateUrl: './example-pdf-viewer.component.html',
  styleUrls: ['./example-pdf-viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplePdfViewerComponent {
  public src: Blob | string = "";

  constructor(private http: HttpClient) {
    this.loadLargeFile();
  }


  public loadLargeFile(): void {
    this.http
      .get(
        '/assets/pdfs/check.pdf',
        {responseType: 'blob'}
      )
      .subscribe((res) => this.src = res);
  }
}
