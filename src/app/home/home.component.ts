import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Imovie } from '../imovie';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
private readonly moviesService = inject(MovieService)

movieList:Imovie[]=[]

ngOnInit(): void {
  this.moviesService.getMovie().subscribe({
    next:(res)=>{
      this.movieList=res.results
      console.log(this.movieList);
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
}
