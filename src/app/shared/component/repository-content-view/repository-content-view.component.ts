import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IItem } from '../../models/repositoryContent.model';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-repository-content-view',
  templateUrl: './repository-content-view.component.html',
  styleUrls: ['./repository-content-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryContentViewComponent implements OnInit {
  @Input() repositoryContentData: IItem[];
  selectItem: IItem;
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal(id: string, item: IItem): void {
    this.selectItem = item;
    this.modalService.open(id);
  }

  closeModal(id: string): void {
      this.modalService.close(id);
  }

}
