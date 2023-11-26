import {
    OrderCreatedEvent,
    Publisher,
    Subjects,
} from "@sgticketingchano/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}

