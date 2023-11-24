import { Publisher, Subjects, TicketUpdatedEvent } from "@sgticketingchano/common";
export declare class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}
