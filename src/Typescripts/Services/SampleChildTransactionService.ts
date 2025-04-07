import {SampleParentTransactionService} from "@nsemea_lib/Services/SampleParentTransactionService";
import * as log from 'N/log';
import {SampleParentTransaction} from "@nsemea_lib/Entities/SampleParentTransaction";

export class SampleChildTransactionService extends SampleParentTransactionService {
  override log (message: string) {
    super.log(message);
    log.debug('SampleChildTransactionService', `CHILD Generic : ${message}`);
  }
  override presetFields(SampleTransaction: SampleParentTransaction) {
    super.presetFields(SampleTransaction);
    log.debug('SampleChildTransactionService', 'Child Generic preset fields');
  }
}