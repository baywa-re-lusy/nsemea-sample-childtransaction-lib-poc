import {SampleParentTransaction} from "@nsemea_lib/Entities/SampleParentTransaction";
import * as record from 'N/record';

export class SampleChildTransaction extends SampleParentTransaction {
  override recordType() {
    return record.Type.SALES_ORDER;
  }
}