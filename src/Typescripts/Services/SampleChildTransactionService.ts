import {SampleParentTransactionService} from "@nsemea_lib/Services/SampleParentTransactionService";
import * as log from 'N/log';

export class SampleChildTransactionService extends SampleParentTransactionService {
  override log (message: string) {
    super.log(message);
    log.debug('SampleChildTransactionService', `CHILD Generic : ${message}`);
  }
}