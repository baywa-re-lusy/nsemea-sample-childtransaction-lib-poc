import * as log from 'N/log';
import {SampleChildTransactionService} from "./SampleChildTransactionService";
import {SampleParentTransactionServiceLUSY} from "@nsemea_lib/Services/SampleParentTransactionServiceLUSY";

export class SampleChildTransactionServiceLUSY extends SampleChildTransactionService {
  override log (message: string) {
    super.log(message);
    SampleParentTransactionServiceLUSY.logLusy1(message);
    SampleParentTransactionServiceLUSY.logLusy2(message);
    log.debug('LUSY > SampleChildTransactionService', `CHILD LUSY Generic : ${message}`);
  }
}

// Apply the mixin to the class prototype
Object.assign(SampleChildTransactionServiceLUSY.prototype, SampleParentTransactionServiceLUSY);
