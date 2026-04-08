import { Component, AfterViewInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('0.75s cubic-bezier(0.16,1,0.3,1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AboutComponent implements AfterViewInit{

  activeYear = 0;
 
  timeline = [
    { year: '2009', title: 'Fondation', desc: "Création de la société par une équipe de 12 experts pétroliers avec une vision nationale ambitieuse et un savoir-faire reconnu sur les marchés internationaux." },
    { year: '2012', title: 'Premier contrat majeur', desc: "Signature du premier accord de distribution régionale couvrant 5 wilayas — une étape fondatrice qui valide notre modèle opérationnel." },
    { year: '2015', title: 'Certifications ISO', desc: "Obtention des certifications ISO 9001 et ISO 14001, confirmant notre engagement envers la qualité, la sécurité et la protection de l'environnement." },
    { year: '2018', title: 'Expansion logistique', desc: "Acquisition d'une flotte de 80 camions-citernes et structuration d'un réseau de transport multimodal couvrant l'ensemble du territoire." },
    { year: '2021', title: 'Partenariats internationaux', desc: "Signature de 15 accords stratégiques avec des partenaires mondiaux pour diversifier et sécuriser nos sources d'approvisionnement en hydrocarbures." },
    { year: '2024', title: 'Leadership national', desc: "Consolidation de notre position de leader avec 500+ points de livraison actifs et plus de 2 millions de tonnes traitées annuellement." }
  ];
 
  values = [
    { sym: '◈', title: 'Intégrité', desc: 'Chaque engagement est tenu. Chaque transaction est transparente. Zéro compromis.' },
    { sym: '◇', title: 'Excellence', desc: 'Nous repoussons constamment les limites de la performance opérationnelle et de la qualité de service.' },
    { sym: '◉', title: 'Sécurité', desc: 'Tolérance zéro pour les incidents — la sécurité de nos équipes et partenaires prime sur tout.' },
    { sym: '◎', title: 'Innovation', desc: 'Solutions technologiques de pointe pour optimiser chaque processus de la chaîne énergétique.' }
  ];
 
  team = [
    { name: 'Karim Benali',   role: 'PDG & Fondateur',          bio: '20 ans d\'expérience dans l\'industrie pétrolière internationale',     init: 'KB' },
    { name: 'Sara Mansouri',  role: 'Directrice des Opérations', bio: 'Experte en logistique et supply chain énergétique',                    init: 'SM' },
    { name: 'Omar Hadj',      role: 'Directeur Commercial',      bio: 'Spécialiste des marchés pétroliers et des négociations mondiales',     init: 'OH' },
    { name: 'Nadia Rezgui',   role: 'Directrice QHSE',           bio: 'Experte en sécurité industrielle et conformité réglementaire',         init: 'NR' }
  ];
 
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('aos-visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.aos').forEach(el => observer.observe(el));
  }
 
  setYear(i: number): void {
    this.activeYear = i;
  }

}
