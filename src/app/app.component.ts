import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'QafqazNet';

  ourServices: { title: string; description: string; imageUrl: string }[] = [
    {
      title: 'Internet and data services',
      description:
        'Qafqaznet LLC offers high-speed internet connection, intranet organization, company internal internet, data center service.',
      imageUrl: 'Frame 1.svg',
    },
    {
      title: 'Communication and TV service',
      description:
        'Providing your office with modern means of communication is our main task.',
      imageUrl: 'Frame 2.svg',
    },
    {
      title: 'Vehicle tracking system (GPS)',
      description:
        'Our navigation units connect to the state systems of all vehicles and allow displaying information about traffic jams...',
      imageUrl: 'Frame 3.svg',
    },
    {
      title: 'Service of IT equipment',
      description:
        'One of the activities of our company is the supply of IT equipment. Today, any company cannot exist without servers, computers and...',
      imageUrl: 'Frame 4.svg',
    },
    {
      title: 'Web programming and application programming',
      description:
        'We offer web and application programming services (site, license, domain, hosting sales).',
      imageUrl: 'Frame 5.svg',
    },
    {
      title: 'Security - control systems',
      description:
        'Video-surveillance systems are designed to detect, repeat and account for everything that happens in the field of coverage of the video...',
      imageUrl: 'Frame 6.svg',
    },
    {
      title: 'Infrastructure and communication lines',
      description:
        "'Qafqaznet LLC' specialists are ready to implement a project of any complexity for you",
      imageUrl: 'Frame 7.svg',
    },
    {
      title: 'Printer service',
      description:
        'If your printer needs a cartridge, we recommend contacting the reliable Qafqaznet LLC company with extensive experience and high-quality...',
      imageUrl: 'Frame 8.svg',
    },
  ];

  ourPartners: { image: string }[] = [
    {
      image: '/images/partners/googleplay.png',
    },
    {
      image: '/images/partners/klarna.svg',
    },
    {
      image: '/images/partners/unionpay.png',
    },
    {
      image: '/images/partners/americanexpress.png',
    },
    {
      image: '/images/partners/westernunion.svg',
    },
    {
      image: '/images/partners/applepay.svg',
    },
    {
      image: '/images/partners/payoneer.svg',
    },
  ];
}
