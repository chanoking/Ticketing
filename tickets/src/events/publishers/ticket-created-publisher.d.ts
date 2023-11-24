import { Publisher, Subjects, TicketCreatedEvent } from "@sgticketingchano/common";
export declare class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}
