import { AfterViewInit, Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-srv',
  templateUrl: './srv.component.html',
  styleUrls: ['./srv.component.css'],
  animations: [
    trigger('cardState', [
      state('normal', style({ transform: 'translateY(0)' })),
      state('hovered', style({ transform: 'translateY(-10px)' })),
      transition('normal <=> hovered', animate('400ms cubic-bezier(0.16,1,0.3,1)'))
    ])
  ]
})
export class SrvComponent  implements AfterViewInit {
 
  services = [
    {
      id: '01',
      title: 'Distribution',
      subtitle: 'Réseau & Livraison',
      description: "Un réseau de distribution de pointe couvrant l'ensemble du territoire national. Nous assurons la livraison de produits pétroliers avec précision, fiabilité et dans le strict respect des normes de sécurité les plus élevées.",
      icon: 'distribution',
      accentColor: '#C8860A',
      stats: [
        { value: '500+', label: 'Points de livraison' },
        { value: '24/7', label: 'Disponibilité' },
        { value: '99.8%', label: 'Ponctualité' }
      ],
      features: [
        'Suivi GPS en temps réel',
        'Certificats de conformité',
        'Gestion des flux prioritaires'
      ]
    },
    {
      id: '02',
      title: 'Achats',
      subtitle: 'Approvisionnement & Sourcing',
      description: "Expertise en approvisionnement stratégique des hydrocarbures sur les marchés mondiaux. Notre équipe négocie les meilleures conditions d'achat pour garantir la compétitivité de votre chaîne d'approvisionnement.",
      icon: 'achats',
      accentColor: '#2A7A4A',
      stats: [
        { value: '50+', label: 'Partenaires mondiaux' },
        { value: '15 ans', label: "D'expertise marché" },
        { value: '2M+', label: 'Tonnes/an' }
      ],
      features: [
        'Analyse des marchés spot',
        'Couverture des risques prix',
        'Optimisation des stocks'
      ]
    },
    {
      id: '03',
      title: 'Transports',
      subtitle: 'Logistique & Acheminement',
      description: "Solutions de transport multimodal adaptées à chaque contrainte opérationnelle. Pipeline, camion-citerne, maritime — nous orchestrons chaque mouvement de produits avec une rigueur absolue et une traçabilité complète.",
      icon: 'transports',
      accentColor: '#1B4A8A',
      stats: [
        { value: '200+', label: 'Véhicules spécialisés' },
        { value: '30+', label: 'Routes nationales' },
        { value: 'ISO 9001', label: 'Certifié' }
      ],
      features: [
        'Transport pipeline & routier',
        'Logistique maritime',
        'Traçabilité intégrale'
      ]
    }
  ];
 
  cardStates: string[] = ['normal', 'normal', 'normal'];
  activeCard = 0;
 
  ngAfterViewInit(): void {
    this.initScrollObserver();
  }
 
  initScrollObserver(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.aos').forEach(el => observer.observe(el));
  }
 
  onCardEnter(i: number): void {
    this.cardStates[i] = 'hovered';
    this.activeCard = i;
  }
 
  onCardLeave(i: number): void {
    this.cardStates[i] = 'normal';
  }
}