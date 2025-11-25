import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact-detail-component',
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    TextareaModule,
    ButtonModule,
  ],
  templateUrl: './contact-detail-component.html',
  styleUrl: './contact-detail-component.scss',
})
export class ContactDetailComponent {
  detailData = [
    {
      label: 'Office',
      description: '1234 N Spring St, Los Angeles, CA 90012, United States.',
    },
    {
      label: 'Phone',
      description: '+91 - 89202897174',
    },
    {
      label: 'Email',
      description: 'rahul.mi8920@gmail.com',
    },
  ];
}
