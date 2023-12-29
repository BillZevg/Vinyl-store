import { Component } from '@angular/core';
import { VinylService } from '../../../services/vinyl.service';
import { Vinyl } from '../../../shared/models/Vinyl';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../partials/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../../partials/search/search.component';
import { Observable } from 'rxjs';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, HeaderComponent, SearchComponent, NotFoundComponent],
})
export class HomeComponent {
  vinyls: Vinyl[] = [];
  constructor(
    private vinylService: VinylService,
    activatedRoute: ActivatedRoute
  ) {
    let vinylsObservable: Observable<Vinyl[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        vinylsObservable = this.vinylService.getAllVinylsBySearchTerm(
          params.searchTerm
        );
      else vinylsObservable = vinylService.getAll();

      vinylsObservable.subscribe((serverVinyls) => {
        this.vinyls = serverVinyls;
      });
    });
  }
}
