import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IOwner } from '../../models/userContent.model';
import { ModalService } from '../../services/modal.service';
// import { IOwner } from '../shared/models/userContent.model';
// import { ModalService } from '../shared/services/modal.service';

@Component({
  selector: 'app-user-content-view',
  templateUrl: './user-content-view.component.html',
  styleUrls: ['./user-content-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserContentViewComponent implements OnInit {
  @Input() userContentData: IOwner[];
  selectItem: IOwner;
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal(id: string, item: IOwner): void {
    this.selectItem = item;
    this.modalService.open(id);
  }

  closeModal(id: string): void {
      this.modalService.close(id);
  }
}
