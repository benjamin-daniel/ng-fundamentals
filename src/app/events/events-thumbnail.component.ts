import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "events-thumbnail",
  template: `
    <div class="well hoverwell thumbnail">
      <div>Date: {{ event.date }}</div>
      <div>Time: {{ event.time }}</div>
      <div>Price: \${{ event.price }}</div>
      <div>
        <span>Location: {{ event.location.address }}</span>
        <span class="pad-left"
          >{{ event.location.city }}, {{ event.location.country }}</span
        >
      </div>
    </div>
  `,
  styles: [
    `
      .pad-left {
        margin-left: 10px;
      }
    `
  ]
})
export class EventsThumbnailComponent {
  @Input() event: any;
}
