export class GroupModelServer {
  group_id: number;
  branch_id_fk: number;
  staff_id_fk: number;
  group_name: string;
  group_code: string;
  group_location: string;
  group_town: string;
  group_reg_date: Date;
  group_created_at: Date;
  group_updated_at: Date;
}

export interface ServerResponse {
  count: number;
  groups: GroupModelServer[];
}
