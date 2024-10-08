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
      title: 'Software development',
      description:
        'We offer VEB and application programming services (sales of licenses, domains, hostings). Using the services of Qafqaznet LLC, you can optimize telecommunications expenses, as well as ensure safe and uninterrupted operation of servers and telecommunications equipment. Your employees and customers get quality mobile communication and reliable access to the Internet at any time. Website development is a creative process that requires the ability to think in a unique way and create the most unique products. "Qafqaznet LLC" employs professional programmers with considerable experience in the field of website development. Therefore, you are guaranteed to get a site that actually sells your product.Are you looking for a good programmer to create a website, develop software modules or solve other web programming issues? Then call us. We will help you achieve great results in increasing sales!',
      imageUrl: 'ser1.svg',
    },
    {
      title: '24/7 Technical Support Services',
      description:
        'We offer VEB and application programming services (sales of licenses, domains, hostings). Using the services of Qafqaznet LLC, you can optimize telecommunications expenses, as well as ensure safe and uninterrupted operation of servers and telecommunications equipment. Your employees and customers get quality mobile communication and reliable access to the Internet at any time. Website development is a creative process that requires the ability to think in a unique way and create the most unique products. "Qafqaznet LLC" employs professional programmers with considerable experience in the field of website development. Therefore, you are guaranteed to get a site that actually sells your product.Are you looking for a good programmer to create a website, develop software modules or solve other web programming issues? Then call us. We will help you achieve great results in increasing sales! A domain name is your website"s address on the Internet. ',
      imageUrl: 'ser2.svg',
    },
    {
      title: 'Security Solutions',
      description:
        'We offer VEB and application programming services (sales of licenses, domains, hostings). Using the services of Qafqaznet LLC, you can optimize telecommunications expenses, as well as ensure safe and uninterrupted operation of servers and telecommunications equipment. Your employees and customers get quality mobile communication and reliable access to the Internet at any time. Website development is a creative process that requires the ability to think in a unique way and create the most unique products. "Qafqaznet LLC" employs professional programmers with considerable experience in the field of website development. Therefore, you are guaranteed to get a site that actually sells your product.Are you looking for a good programmer to create a website, develop software modules or solve other web programming issues? Then call us. We will help you achieve great results in increasing sales! A domain name is your website"s address on the Internet.',
      imageUrl: 'ser3.svg',
    },
    {
      title: 'Telecommunication Services',
      description:
        'We offer VEB and application programming services (sales of licenses, domains, hostings). Using the services of Qafqaznet LLC, you can optimize telecommunications expenses, as well as ensure safe and uninterrupted operation of servers and telecommunications equipment. Your employees and customers get quality mobile communication and reliable access to the Internet at any time. Website development is a creative process that requires the ability to think in a unique way and create the most unique products. "Qafqaznet LLC" employs professional programmers with considerable experience in the field of website development. Therefore, you are guaranteed to get a site that actually sells your product.Are you looking for a good programmer to create a website, develop software modules or solve other web programming issues? Then call us. We will help you achieve great results in increasing sales! A domain name is your website"s address on the Internet. ',
      imageUrl: 'ser4.svg',
    },
    {
      title: 'Sale of equipment',
      description:
        'We offer VEB and application programming services (sales of licenses, domains, hostings). Using the services of Qafqaznet LLC, you can optimize telecommunications expenses, as well as ensure safe and uninterrupted operation of servers and telecommunications equipment. Your employees and customers get quality mobile communication and reliable access to the Internet at any time. Website development is a creative process that requires the ability to think in a unique way and create the most unique products. "Qafqaznet LLC" employs professional programmers with considerable experience in the field of website development. Therefore, you are guaranteed to get a site that actually sells your product.Are you looking for a good programmer to create a website, develop software modules or solve other web programming issues? Then call us. We will help you achieve great results in increasing sales! A domain name is your website"s address on the Internet. ',
      imageUrl: 'ser5_1.svg',
    },
    {
      title: 'IT-Consulting',
      description:
        'We offer VEB and application programming services (sales of licenses, domains, hostings). Using the services of Qafqaznet LLC, you can optimize telecommunications expenses, as well as ensure safe and uninterrupted operation of servers and telecommunications equipment. Your employees and customers get quality mobile communication and reliable access to the Internet at any time. Website development is a creative process that requires the ability to think in a unique way and create the most unique products. "Qafqaznet LLC" employs professional programmers with considerable experience in the field of website development. Therefore, you are guaranteed to get a site that actually sells your product.Are you looking for a good programmer to create a website, develop software modules or solve other web programming issues? Then call us. We will help you achieve great results in increasing sales! A domain name is your website"s address on the Internet.',
      imageUrl: 'ser6_1.svg',
    },
    {
      title: 'Infrastructure and communication lines',
      description:
        "We offer VEB and application programming services (sales of licenses, domains, hostings). Using the services of Qafqaznet LLC, you can optimize telecommunications expenses, as well as ensure safe and uninterrupted operation of servers and telecommunications equipment. Your employees and customers get quality mobile communication and reliable access to the Internet at any time. Website development is a creative process that requires the ability to think in a unique way and create the most unique products. 'Qafqaznet LLC' employs professional programmers with considerable experience in the field of website development. Therefore, you are guaranteed to get a site that actually sells your product.Are you looking for a good programmer to create a website, develop software modules or solve other web programming issues? Then call us. We will help you achieve great results in increasing sales! A domain name is your website's address on the Internet.",
      imageUrl: 'ser7_1.svg',
    },
  ];

  ourPartners: { image: string }[] = [
    {
      image: 'assets/images/partners/googleplay.png',
    },
    {
      image: 'assets/images/partners/klarna.svg',
    },
    {
      image: 'assets/images/partners/unionpay.png',
    },
    {
      image: 'assets/images/partners/americanexpress.png',
    },
    {
      image: 'assets/images/partners/westernunion.svg',
    },
    {
      image: 'assets/images/partners/applepay.svg',
    },
    {
      image: 'assets/images/partners/payoneer.svg',
    },
  ];

  ourProjects: any[] = [
    [
      {
        image: 'assets/images/projects/adore.svg',
      },
      {
        image: 'assets/images/projects/agrarco.webp',
      },
      {
        image: 'assets/images/projects/barattson.png',
      },
    ],
    [
      {
        image: 'assets/images/projects/eas.webp',
      },
      {
        image: 'assets/images/projects/egehospital.png',
      },
      {
        image: 'assets/images/projects/fmsLogo.png',
      },
    ],
    [
      {
        image: 'assets/images/projects/gesco.png',
      },
      {
        image: 'assets/images/projects/bagisaglamliq.png',
      },
      {
        image: 'assets/images/projects/moongroup.png',
      },
    ],
    [
      {
        image: 'assets/images/projects/prosol.png',
      },
      {
        image: 'assets/images/projects/qafqazhotel.png',
      },
      {
        image: 'assets/images/projects/aqrokimya.svg',
      },
    ],
    [
      {
        image: 'assets/images/projects/biyan.svg',
      },
      {
        image: 'assets/images/projects/SL.webp',
      },
      {
        image: 'assets/images/projects/ordel.png',
      },
    ],
    [
      {
        image: 'assets/images/projects/payim.png',
      },
      {
        image: 'assets/images/projects/mingachevir-textile-logo.png',
      },
      {
        image: 'assets/images/projects/kosem.jpeg',
      },
    ],
    [
      {
        image: 'assets/images/projects/qebelend.png',
      },
      {
        image: 'assets/images/projects/redcrescent.png',
      },
      {
        image: 'assets/images/projects/skyservice.svg',
      },
    ],
  ];
}
