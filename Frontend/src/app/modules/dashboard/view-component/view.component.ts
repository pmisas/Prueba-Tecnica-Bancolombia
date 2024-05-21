import { CommonModule } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { CardComponent } from "../../../shared/components/card/card.component";
import { IGuion } from "../../../shared/components/card/card.metadata";
import { ModalComponent } from "../../../shared/components/modal/modal.component";

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
  myToken: string | null = '';  // Variable para almacenar el token

  
  private apiUrl = 'http://localhost:3000/guion/guionista'; 

  constructor(private http: HttpClient) {
    this.myToken = localStorage.getItem('authToken');  // Obtener el token una vez aquí y reutilizarlo
  }

  ngOnInit(): void {
    this.fetchGuiones();
  }

  fetchGuiones(): void {
    if (this.myToken) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.myToken}`
      });
      this.http.get<IGuion[]>(this.apiUrl, { headers }).subscribe({
        next: (data: IGuion[]) => {
          if (data.length === 0) {
            console.log('vacio')
            // No hay guiones, añadir uno vacío
            
          } else {
            this.guiones = data;
          }
          this.loading = false;
        },
        error: (error) => {
          console.error('Error al cargar los guiones', error);
          this.error = true;
          this.loading = false;
        }
      });
    } else {
      console.error('Token no encontrado');
      this.error = true;
      this.loading = false;
    }
  }
  

  handleGuionCreated(guion: IGuion): void {
    this.guiones.push(guion); // Añade el guion a la lista existente
  }
  

  onEmptyCardClicked(): void {
    this.showModal = true;
  }

  onModalClose(): void {
    this.showModal = false;
  }

  ngOnDestroy(): void {
  }
}

