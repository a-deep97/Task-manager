from enum import Enum


class Status(Enum):
    Unknown=0
    Planned=1
    Progress=2
    Blocked=3
    Completed=4