import * as log from 'N/log';
import {SampleChildTransactionService} from "./SampleChildTransactionService";
import {SampleParentTransactionServiceLUSY} from "@nsemea_lib/Services/SampleParentTransactionServiceLUSY";
import {SampleParentTransaction} from "@nsemea_lib/Entities/SampleParentTransaction";

export class SampleChildTransactionServiceLUSY extends SampleChildTransactionService {
  override log (message: string) {
    super.log(message);
    SampleParentTransactionServiceLUSY.logLusy1(message);
    SampleParentTransactionServiceLUSY.logLusy2(message);
    log.debug('LUSY > SampleChildTransactionService', `CHILD LUSY Generic : ${message}`);
  }

  override presetFields(SampleTransaction: SampleParentTransaction) {
    super.presetFields(SampleTransaction);
    SampleParentTransactionServiceLUSY.presetFieldsLUSY(SampleTransaction);
    SampleTransaction.custbody_namecontactonsite += ' LUSY !!!'
  }
}

// Apply the mixin to the class prototype
Object.assign(SampleChildTransactionServiceLUSY.prototype, SampleParentTransactionServiceLUSY);
