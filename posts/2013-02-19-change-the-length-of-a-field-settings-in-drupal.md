---
layout: post
title:  Change the length of a field in Drupal
author: bacardi55
tags:   [drupal, php]
---

## The problem
Today, I wanted to change a size settings in a Drupal field as the client needs changed (who said « as always » ? :°)).

Drupal let the user/coder do a lot of stuff but you can't change the length of a field if there is already values in this field in your database.

As you can imagine, we had value in our database… So I had to found a way to do this change in a clean way.

As in drupal there is no such thing as « clean way » (who said « Troll spotted » :-P), i found a solution. Not a great one, but a working one ^^.



## How to
### How Drupal handle the fields settings?
Drupal stores the *definitions* of the fields in two tables:

- `field_config`: This table contains the storage data;
- `field_config_instance`: This table contains information relative to a specific instance of the field (we won't touch this one).

Drupal stores the values of the fields in:

- `field_data_<field_name>`
- `field_revision_<field_name>`

** change `<field_name>` by the name of your field :) **

### So, what do we do with that?
In brief, you need to:

- Alter `field_data_<field_name>`;
- Alter `field_revision_<field_name>`;
- Change the value in `field_config` for your field.

In my example, the new size is `<NEW VALUE>` so don't forget to change it.

### The code
I wanted to put all the code in the hook_update_N, so I used the db_query function:

    php
    // Change field_data_<field_name> structure table
    // to set a size of 15 for the value field.
    $query = "ALTER TABLE {field_data_<field_name>}
      CHANGE  {<field_name>_value} {<field_name>_value}
      VARCHAR( <NEW VALUE> ) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL";
    db_query($query);

    // Change field_revision_<field_name> structure table
    // to set a size of 15 for the value field.
    $query = "ALTER TABLE {field_revision_<field_name>}
      CHANGE  {<field_name>_value}  {<field_name>_value}
      VARCHAR( <NEW VALUE> ) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL";
    db_query($query);

    // Get field_config data for the job reference field.
    $result = db_select('field_config', 'fc')
      ->fields('fc', array('data'))
      ->condition('fc.field_name', '<field_name>', '=')
      ->execute()
      ->fetchAll();

    if (count($result)) {
      $data = unserialize($result[0]->data);
      if (array_key_exists('settings', $data)
        && array_key_exists('max_length', $data['settings'])) {

        // Change the length to 15.
        $data['settings']['max_length'] = 15;
        db_update('field_config')
          ->fields(array(
            'data' => serialize($data)
          ))
          ->condition('field_name', '<field_name>', '=')
          ->execute();
      }
    }

And your good to go :)

