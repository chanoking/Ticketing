import {
    OrderCancelledEvent,
    Publisher,
    Subjects,
} from "@sgticketingchano/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
