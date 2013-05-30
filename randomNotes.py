#!/bin/env python
from random import choice as randomChoice
from time import sleep
from subprocess import call

notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
noteMods = ['sharp', 'flat']

while True:
  note = randomChoice(notes)
  mod  = randomChoice(noteMods)

  if randomChoice([True, False]):
    note = "%s-%s" % (note, mod)

  call(['say', note])
  sleep(3)
