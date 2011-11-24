<h<?php print $heading_level ?><?php print $title_attributes; ?>><?php print $title ?></h<?php print $heading_level ?>>

<?php print $thumbnail ?>

<div class="where"><?php print $location ?> / <?php print $address ?></div>

<div class="when"><?php print $date ?></div>

<div class="more"><?php print $more ?></div>

<div class="actions">
  <?php if ($like_link) : ?>
    <div class="like"><?php print $like_link ?></div>
  <?php endif; ?>
  
  <?php if ($remove_link) : ?>
    <div class="remove"><?php print $remove_link ?></div>
  <?php endif; ?>
</div>

<div class="clearfix"></div>