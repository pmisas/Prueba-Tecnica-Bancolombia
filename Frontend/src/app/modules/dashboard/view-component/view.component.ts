import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IGuion } from '../../../shared/components/card/card.metadata';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../shared/components/card/card.component';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, CardComponent, ModalComponent],
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit, OnDestroy {
  guiones: IGuion[] = [];
  loading: boolean = true;
  error: boolean = false;

  showModal: boolean = false;


  private apiUrl = 'http://localhost:3000/guion'; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchGuiones();
  }

  fetchGuiones(): void {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOiJndWlvbmlzdGEiLCJ1c2VybmFtZSI6Imp1YW5qbyIsImlhdCI6MTcxNjIwMTU0MSwiZXhwIjoxNzE2Mjg3OTQxfQ.3u9EXQuTgJ9j-FqncVyfI7KpyHA2Jgm-TNy5QNPLGdg'; // Reemplaza con tu token real
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<IGuion[]>(this.apiUrl, { headers }).subscribe(
      (data: IGuion[]) => {
        this.guiones = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error al cargar los guiones', error);
        this.error = true;
        this.loading = false;
      }
    );
  }

  onEmptyCardClicked(): void {
    console.log("evento emitido")
    this.showModal = true;
  }

  // view.component.ts
  onModalClose(): void {
    this.showModal = false;
  }

  

  ngOnDestroy(): void {
  }
}
