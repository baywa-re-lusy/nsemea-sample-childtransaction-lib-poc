import * as log from 'N/log';
import {SampleChildTransactionService} from "./SampleChildTransactionService";
import {SampleParentTransactionServiceLUSY} from "@nsemea_lib/Services/SampleParentTransactionServiceLUSY";
import {SampleParentTransaction} from "@nsemea_lib/Entities/SampleParentTransaction";
import {SampleChildTransaction} from "../Entities/SampleChildTransaction";
import {SampleParentTransactionService} from "@nsemea_lib/Services/SampleParentTransactionService";

export class SampleChildTransactionServiceLUSY extends SampleChildTransactionService {
  override log (message: string) {
    super.log(message);
    SampleParentTransactionServiceLUSY.logLusy1(message);
    SampleParentTransactionServiceLUSY.logLusy2(message);
    log.debug('LUSY > SampleChildTransactionService', `CHILD LUSY Generic : ${message}`);
  }

  override presetFields(SampleTransaction: SampleChildTransaction) {
    super.presetFields(SampleTransaction);
    SampleParentTransactionServiceLUSY.presetFields(SampleTransaction);
    SampleTransaction.custbody_namecontactonsite += ' LUSY !!!';
    log.debug('LUSY > SampleChildTransactionService', 'CHILD LUSY Generic: presetFields');
  }
}

// Apply the mixin to the class prototype
Object.assign(SampleChildTransactionServiceLUSY.prototype, SampleParentTransactionServiceLUSY);
