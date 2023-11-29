import {
    PaymentCreatedEvent,
    Publisher,
    Subjects,
} from "@sgticketingchano/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
