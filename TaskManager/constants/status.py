from enum import Enum


class Status(Enum):
    Unknown=0
    InProgress=1
    Blocked=2
    Closed=3
    Abandoned=4