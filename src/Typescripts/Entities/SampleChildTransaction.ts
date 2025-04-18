import {SampleParentTransaction} from "@nsemea_lib/Entities/SampleParentTransaction";
import * as record from 'N/record';
import {SubRecordDecorator} from "@nsemea_lib/Core/DataAccess/NSTypedRecord";
import {AddressBase} from "@nsemea_lib/Core/DataAccess/AddressBase";

export class SampleChildTransaction extends SampleParentTransaction {

  @SubRecordDecorator(AddressBase)
  accessor shipaddresslist: AddressBase;

  override recordType() {
    return record.Type.SALES_ORDER;
  }
}