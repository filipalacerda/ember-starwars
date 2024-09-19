import { tracked } from '@glimmer/tracking';

export default class Person {
  @tracked name;

  constructor({
    id,
    name,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    films,
    vehicles,
    starships,
    url,
  }) {
    this.id = id;
    this.name = name;
    this.mass = mass || [];
    this.hair_color = hair_color;
    this.eye_color = eye_color;
    this.birth_year = birth_year;
    this.skin_color = skin_color;
    this.gender = gender;
    this.homeworld = homeworld;
    this.films = films;
    this.vehicles = vehicles;
    this.starships = starships;
    this.url = url;
  }
}
