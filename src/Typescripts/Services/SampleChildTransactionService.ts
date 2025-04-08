import {SampleParentTransactionService} from "@nsemea_lib/Services/SampleParentTransactionService";
import * as log from 'N/log';
import {SampleParentTransaction} from "@nsemea_lib/Entities/SampleParentTransaction";
import {SampleChildTransaction} from "../Entities/SampleChildTransaction";

export class SampleChildTransactionService extends SampleParentTransactionService {
  override log (message: string) {
    super.log(message);
    log.debug('SampleChildTransactionService', `CHILD Generic : ${message}`);
  }
  override presetFields(SampleTransaction: SampleChildTransaction) {
    super.presetFields(SampleTransaction);
    log.debug('SampleChildTransactionService', 'Child Generic preset fields');
  }
}