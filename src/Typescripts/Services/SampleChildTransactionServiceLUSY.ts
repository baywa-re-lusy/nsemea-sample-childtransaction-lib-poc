import * as log from 'N/log';
import {SampleChildTransactionService} from "./SampleChildTransactionService";

export class SampleChildTransactionServiceLUSY extends SampleChildTransactionService {
  override log (message: string) {
    super.log(message);
    log.debug('LUSY > SampleChildTransactionService', message);
  }
}