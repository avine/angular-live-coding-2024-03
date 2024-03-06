import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateComponent } from './private/private.component';
import { SharedComponent } from './shared.component';
import { SharedService } from './shared.service';

@NgModule({
  imports: [CommonModule],
  providers: [SharedService],
  declarations: [SharedComponent, PrivateComponent],
  exports: [SharedComponent],
})
export class SharedModule {}
