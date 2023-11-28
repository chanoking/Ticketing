import {
  Publisher,
  Subjects,
  TicketUpdatedEvent
} from "@sgticketingchano/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}